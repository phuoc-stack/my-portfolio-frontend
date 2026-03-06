import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { ReviewsService } from '@/client';
import type {
  ReviewCreateSchema,
  ReviewResponseSchema,
  ReviewStatusSchema,
} from '@/client';

/**
 * Hook to check if the current user has reviewed a course
 */
export function useReviewStatus(courseSlug: string) {
  return useQuery({
    queryKey: ['review-status', courseSlug],
    queryFn: async (): Promise<ReviewStatusSchema> => {
      const response = await ReviewsService.getReviewStatus({
        path: { course_slug: courseSlug },
      });
      
      if (!response.data) {
        throw new Error('Failed to get review status');
      }
      
      return response.data;
    },
    enabled: !!courseSlug,
  });
}

/**
 * Hook to create a review for a course
 */
export function useCreateReview(courseSlug: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation('course');

  return useMutation({
    mutationFn: async (payload: ReviewCreateSchema): Promise<ReviewResponseSchema> => {
      const response = await ReviewsService.createReview({
        path: { course_slug: courseSlug },
        body: payload,
      });

      if (!response.data) {
        throw new Error('Failed to create review');
      }
      
      return response.data;
    },
    onSuccess: () => {
      // Invalidate review status
      void queryClient.invalidateQueries({
        queryKey: ['review-status', courseSlug],
      });
      
      toast.success(t('student.review.success.submitted'));
    },
    onError: (error: Error) => {
      const message = error.message || t('student.review.errors.submit-failed');
      toast.error(message);
    },
  });
}

/**
 * Hook to get all reviews for a course (instructor/admin only)
 */
export function useCourseReviews(courseSlug: string) {
  return useQuery({
    queryKey: ['course-reviews', courseSlug],
    queryFn: async (): Promise<ReviewResponseSchema[]> => {
      const response = await ReviewsService.getCourseReviews({
        path: { course_slug: courseSlug },
      });
      
      if (!response.data) {
        throw new Error('Failed to get course reviews');
      }
      
      return response.data;
    },
    enabled: !!courseSlug,
  });
}

/**
 * Hook to delete a review (admin only)
 */
export function useDeleteReview(courseSlug: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation('course');

  return useMutation({
    mutationFn: async (reviewNanoid: string): Promise<void> => {
      await ReviewsService.deleteReview({
        path: { review_nanoid: reviewNanoid },
      });
    },
    onSuccess: () => {
      // Invalidate course reviews
      void queryClient.invalidateQueries({
        queryKey: ['course-reviews', courseSlug],
      });
      
      toast.success(t('student.review.success.deleted'));
    },
    onError: (error: Error) => {
      const message = error.message || t('student.review.errors.delete-failed');
      toast.error(message);
    },
  });
}